use definitions;

CREATE TABLE IF NOT EXISTS `dashboards` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(140),
  `createdAt` TIMESTAMP NOT NULL DEFAULT NOW(),
  `updatedAt` TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO dashboards (title)
VALUES
    ('Q1 Financial Review'),
    ('Q2 Financial Review'),
    ('Q3 Financial Review'),
    ('Q4 Financial Review'),
    ('Employee Performance Reports'),
    ('Marketing Plan'),
    ('Research & Development Project Proposals'),
    ('Migration Project'),
    ('Sales Reports'),
    ('Customer Acquisition Plan'),
    ('Social Media Strategy'),
    ('Sales trend'),
    ('Customer purchasing Trends');

UPDATE dashboards
SET title = 'R&D Project Proposals'
WHERE title = 'Research & Development Project Proposals';