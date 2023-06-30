CREATE TABLE user (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname varchar(50) NOT NULL,
  lastname varchar(50) NOT NULL,
  age int(11) NOT NULL,
  campus varchar(255) NOT NULL,
  profile_picture varchar(150),
  email varchar(255) UNIQUE NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
  
CREATE TABLE project (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name varchar(150) NOT NULL,
  description TEXT,
  link varchar(255),
  user_id int(11) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
