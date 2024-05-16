<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version21000101000000 extends AbstractMigration
{
  public function getDescription(): string
  {
    return '';
  }

  public function up(Schema $schema): void
  {
    $hashedPass = "$2y$13\$oRbQYjEfJpSxIFXDM8Tnu.WERtzMiVkN/hhNUwzEncGFKZQL1Lx8a";
    $this->addSql(
      "INSERT INTO `user` (`id`, `email`, `roles`, `password`, `first_name`, `last_name`, `phone`) VALUES
      (1, 'admin@admin.com', '[\"ROLE_ADMIN\"]', ?, 'userFirst0', 'userLast0', '0123456789'),
      (2, 'user@user.com', '[\"ROLE_USER\"]', ?, 'userFirst1', 'userLast1', '1123456789'),
      (3, 'user2@user.com', '[\"ROLE_USER\"]', ?, 'userFirst2', 'userLast2', '2123456789'),
      (4, 'mail3@example.com', '[\"ROLE_USER\"]', 'password3', 'userFirst3', 'userLast3', '3123456789'),
      (5, 'mail4@example.com', '[\"ROLE_USER\"]', 'password4', 'userFirst4', 'userLast4', '4123456789'),
      (6, 'mail5@example.com', '[\"ROLE_USER\"]', 'password5', 'userFirst5', 'userLast5', '5123456789')",
      [$hashedPass, $hashedPass, $hashedPass]
    );

    // this up() migration is auto-generated, please modify it to your needs
    $this->addSql("INSERT INTO `category` (`id`, `name`) VALUES
        (1, 'Category 0'),
        (2, 'Category 1'),
        (3, 'Category 2'),
        (4, 'Category 3'),
        (5, 'Category 4'),
        (6, 'Category 5')");

    $this->addSql("INSERT INTO `destination` (`id`, `country`, `city`) VALUES
        (1, 'United Kingdom', 'London'),
        (2, 'Poland', 'Warsaw'),
        (3, 'Germany', 'Berlin'),
        (4, 'Spain', 'Madrid'),
        (5, 'Greece', 'Athens'),
        (6, 'Czech Republic', 'Prague')");

    $this->addSql("INSERT INTO `trip` (`id`, `owner_id`, `name`, `description`, `destination_id`, `start_date`, `end_date`) VALUES
        (1, 1, 'Trip 0', 'Description for trip number 0', 1, '2024-05-01', '2024-06-01'),
        (2, 1, 'Trip 1', 'Description for trip number 1', 1, '2024-04-20', '2024-06-30'),
        (3, 1, 'Trip 2', 'Description for trip number 2', 1, '2024-01-01', '2024-08-30'),
        (4, 2, 'Trip 3', 'Description for trip number 3', 2, '2024-05-16', '2024-06-16'),
        (5, 2, 'Trip 4', 'Description for trip number 4', 2, '2024-05-16', '2024-06-16'),
        (6, 2, 'Trip 5', 'Description for trip number 5', 2, '2024-05-16', '2024-06-16'),
        (7, 3, 'Trip 6', 'Description for trip number 6', 3, '2024-05-16', '2024-06-16'),
        (8, 3, 'Trip 7', 'Description for trip number 7', 3, '2024-05-16', '2024-06-16'),
        (9, 3, 'Trip 8', 'Description for trip number 8', 3, '2024-05-16', '2024-06-16'),
        (10, 4, 'Trip 9', 'Description for trip number 9', 4, '2024-05-16', '2024-06-16'),
        (11, 4, 'Trip 10', 'Description for trip number 10', 4, '2024-05-16', '2024-06-16'),
        (12, 4, 'Trip 11', 'Description for trip number 11', 4, '2024-05-16', '2024-06-16'),
        (13, 5, 'Trip 12', 'Description for trip number 12', 5, '2024-05-16', '2024-06-16'),
        (14, 5, 'Trip 13', 'Description for trip number 13', 5, '2024-05-16', '2024-06-16'),
        (15, 5, 'Trip 14', 'Description for trip number 14', 5, '2024-05-16', '2024-06-16'),
        (16, 6, 'Trip 15', 'Description for trip number 15', 6, '2024-05-16', '2024-06-16'),
        (17, 6, 'Trip 16', 'Description for trip number 16', 6, '2024-05-16', '2024-06-16'),
        (18, 6, 'Trip 17', 'Description for trip number 17', 6, '2024-05-16', '2024-06-16');");

    $this->addSql("INSERT INTO `trip_category` (`trip_id`, `category_id`) VALUES
        (1, 1),
        (2, 3),
        (3, 1),
        (4, 2),
        (5, 5),
        (6, 2),
        (7, 3),
        (8, 3),
        (9, 6),
        (10, 4),
        (11, 1),
        (12, 4),
        (13, 3),
        (14, 5),
        (15, 5),
        (16, 6),
        (17, 6),
        (18, 1);");
  }

  public function down(Schema $schema): void
  {
    // this down() migration is auto-generated, please modify it to your needs
  }
}
