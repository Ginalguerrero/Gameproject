CREATE TABLE comment (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  comment VARCHAR(250) NOT NULL,
  user_id INT,
  game_id INT,
  FOREIGN KEY (game_id)
  REFERENCES gamedata(id)
  ON DELETE CASCADE,
  FOREIGN KEY (user_id)
  REFERENCES user(id)
  ON DELETE CASCADE
);

INSERT INTO comment (user_id, game_id, comment)
VALUES (1,	1,	"That is the best game I have ever played in my life"),
(2,	5,	"I will never play this game again, it keeps lagging"),
(3,	9,	"The game graph is so so bad, I will never play it again "),
(4,	7,	"Recommend to play it");
