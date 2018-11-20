CREATE TABLE IF NOT EXISTS prods (
  "id" serial primary key,
  "name" VARCHAR(256),
  "average_rating" FLOAT(2),
  "percent_recommended" FLOAT(2)
);

CREATE TABLE IF NOT EXISTS comments (
    "id" serial primary key,
    "user" VARCHAR(36),
    "prodRating" SMALLINT,
    "yesRating" SMALLINT,
    "noRating" SMALLINT,
    "date" TIMESTAMP WITH TIME ZONE,
    "body" TEXT,
    "verified" BOOLEAN,
    "recommend" BOOLEAN,
    "size" SMALLINT,
    "width" SMALLINT,
    "comfort" SMALLINT,
    "quality" SMALLINT,
    "response" TEXT,
    "prodId" INTEGER REFERENCES prods(id),
    "header" TEXT
);

CREATE OR REPLACE FUNCTION update_average_rating_and_percent_recommended() 
RETURNS TRIGGER 
AS
$BODY$
  BEGIN
   UPDATE prods
	  SET average_rating = (SELECT AVG("prodRating") FROM comments WHERE "prodId" = NEW."prodId"),
        percent_recommended = (SELECT (count(CASE WHEN recommend=true THEN 1 END) * 100) / count(recommend) FROM comments WHERE "prodId" = NEW."prodId")
  	WHERE id = NEW."prodId";
   RETURN NEW;
  END;
$BODY$
LANGUAGE "plpgsql";

DROP TRIGGER IF EXISTS update_avg ON comments;

CREATE TRIGGER update_avg 
  AFTER INSERT 
  ON comments
  FOR EACH ROW
  EXECUTE PROCEDURE update_average_rating_and_percent_recommended();
