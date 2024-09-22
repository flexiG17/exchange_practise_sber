-- CreateTable
CREATE TABLE `enterprise` (
    `id` VARCHAR(191) NOT NULL,
    `name` TEXT NOT NULL,
    `description` TEXT NOT NULL,
    `location` TEXT NOT NULL,
    `created_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updated_at` DATETIME(6) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `program` (
    `id` VARCHAR(191) NOT NULL,
    `code` TEXT NOT NULL,
    `name` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `program_tags` (
    `id` VARCHAR(191) NOT NULL,
    `program_id` VARCHAR(36) NOT NULL,
    `tag_id` VARCHAR(36) NOT NULL,

    INDEX `FK_PROGRAM`(`program_id`),
    INDEX `FK_TAG`(`tag_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `request` (
    `id` VARCHAR(191) NOT NULL,
    `name` TEXT NOT NULL,
    `type` ENUM('university', 'enterprise') NOT NULL,
    `university_id` VARCHAR(36) NULL,
    `enterprise_id` VARCHAR(191) NULL,
    `status` ENUM('open', 'waiting', 'in_progress', 'review', 'refuse', 'approved', 'archived') NOT NULL DEFAULT 'open',
    `students_limit` INTEGER NOT NULL,
    `description` TEXT NOT NULL,
    `created_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updated_at` DATETIME(6) NOT NULL,

    INDEX `FK_ENTERPRISE_TASK`(`enterprise_id`),
    INDEX `FK_UNIVERSITY_AUTHOR`(`university_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `request_programs` (
    `id` VARCHAR(191) NOT NULL,
    `request_id` VARCHAR(191) NOT NULL,
    `program_id` VARCHAR(191) NOT NULL,

    INDEX `FK_REQUEST_PROGRAM_ID`(`request_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `request_students` (
    `id` VARCHAR(191) NOT NULL,
    `request_id` VARCHAR(191) NOT NULL,
    `student_id` VARCHAR(191) NOT NULL,

    INDEX `FK_REQUEST_ID`(`request_id`),
    INDEX `FK_REQUEST_USER`(`student_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `student` (
    `id` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `university_id` VARCHAR(36) NOT NULL,
    `program_id` VARCHAR(36) NOT NULL,
    `enterprise_request_id` VARCHAR(36) NULL,
    `course` ENUM('one', 'two', 'three', 'four', 'five', 'six') NOT NULL,
    `academic_group` TEXT NOT NULL,

    INDEX `FK_STUDENT_ENTERPRISE_REQUEST`(`enterprise_request_id`),
    INDEX `FK_STUDENT_PROGRAM`(`program_id`),
    INDEX `FK_STUDENT_UNIVERSITY`(`university_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tag` (
    `id` VARCHAR(191) NOT NULL,
    `name` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `university` (
    `id` VARCHAR(191) NOT NULL,
    `name` TEXT NOT NULL,
    `description` TEXT NOT NULL,
    `location` TEXT NOT NULL,
    `created_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updated_at` DATETIME(6) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` VARCHAR(191) NOT NULL,
    `name` TEXT NOT NULL,
    `email` TEXT NOT NULL,
    `phone_number` TEXT NOT NULL,
    `gender` ENUM('male', 'female') NOT NULL,
    `password` TEXT NOT NULL,
    `role` ENUM('student', 'enterprise', 'university', 'admin') NOT NULL,
    `student_id` VARCHAR(36) NULL,
    `university_id` VARCHAR(36) NULL,
    `enterprise_id` VARCHAR(36) NULL,
    `created_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updated_at` DATETIME(6) NOT NULL,

    INDEX `FK_USER_FROM_ENTERPRISE`(`enterprise_id`),
    INDEX `FK_USER_FROM_UNIVERSITY`(`university_id`),
    INDEX `FK_USER_IS__STUDENT`(`student_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `program_tags` ADD CONSTRAINT `FK_PROGRAM` FOREIGN KEY (`program_id`) REFERENCES `program`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `program_tags` ADD CONSTRAINT `FK_TAG` FOREIGN KEY (`tag_id`) REFERENCES `tag`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `request` ADD CONSTRAINT `FK_ENTERPRISE_TASK` FOREIGN KEY (`enterprise_id`) REFERENCES `enterprise`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `request` ADD CONSTRAINT `FK_UNIVERSITY_TASK` FOREIGN KEY (`university_id`) REFERENCES `university`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `request_programs` ADD CONSTRAINT `FK_REQUEST_ID_FOR_PROGRAM` FOREIGN KEY (`request_id`) REFERENCES `request`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `request_students` ADD CONSTRAINT `FK_REQUEST_ID` FOREIGN KEY (`request_id`) REFERENCES `request`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `request_students` ADD CONSTRAINT `FK_REQUEST_USER` FOREIGN KEY (`student_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `student` ADD CONSTRAINT `FK_STUDENT_PROGRAM` FOREIGN KEY (`program_id`) REFERENCES `program`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `student` ADD CONSTRAINT `FK_STUDENT_UNIVERSITY` FOREIGN KEY (`university_id`) REFERENCES `university`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `FK_USER_FROM_ENTERPRISE` FOREIGN KEY (`enterprise_id`) REFERENCES `enterprise`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `FK_USER_FROM_UNIVERSITY` FOREIGN KEY (`university_id`) REFERENCES `university`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `FK_USER_IS__STUDENT` FOREIGN KEY (`student_id`) REFERENCES `student`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
