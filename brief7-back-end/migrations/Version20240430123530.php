<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240430123530 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE category (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(50) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE destination (id INT AUTO_INCREMENT NOT NULL, country VARCHAR(255) NOT NULL, city VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE trip_category (trip_id INT NOT NULL, category_id INT NOT NULL, INDEX IDX_AE1D2AD1A5BC2E0E (trip_id), INDEX IDX_AE1D2AD112469DE2 (category_id), PRIMARY KEY(trip_id, category_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE trip_category ADD CONSTRAINT FK_AE1D2AD1A5BC2E0E FOREIGN KEY (trip_id) REFERENCES trip (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE trip_category ADD CONSTRAINT FK_AE1D2AD112469DE2 FOREIGN KEY (category_id) REFERENCES category (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE trip ADD destination_id INT NOT NULL');
        $this->addSql('ALTER TABLE trip ADD CONSTRAINT FK_7656F53B816C6140 FOREIGN KEY (destination_id) REFERENCES destination (id)');
        $this->addSql('CREATE INDEX IDX_7656F53B816C6140 ON trip (destination_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE trip DROP FOREIGN KEY FK_7656F53B816C6140');
        $this->addSql('ALTER TABLE trip_category DROP FOREIGN KEY FK_AE1D2AD1A5BC2E0E');
        $this->addSql('ALTER TABLE trip_category DROP FOREIGN KEY FK_AE1D2AD112469DE2');
        $this->addSql('DROP TABLE category');
        $this->addSql('DROP TABLE destination');
        $this->addSql('DROP TABLE trip_category');
        $this->addSql('DROP INDEX IDX_7656F53B816C6140 ON trip');
        $this->addSql('ALTER TABLE trip DROP destination_id');
    }
}
