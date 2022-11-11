CREATE TABLE user (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_name VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL,
  game_id INT,
  FOREIGN KEY (game_id)
  REFERENCES gamedata(id)
  ON DELETE SET NULL
);

INSERT INTO user (user_name, password, game_id)
VALUES ("Luiz 4P", "fasfva11325", 1),
    ("Kyle 4P", "541afva56f43", 5),
    ("Preston 4P", "5as4f65asdf", 9),
    ("Gina 4P", "18a1f68e4a6f", 7);