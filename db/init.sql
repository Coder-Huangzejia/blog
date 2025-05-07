-- 创建数据库
CREATE DATABASE IF NOT EXISTS blog DEFAULT CHARACTER
SET
    utf8mb4 DEFAULT COLLATE utf8mb4_unicode_ci;

-- 使用数据库
USE blog;

-- 创建文章表
CREATE TABLE
    IF NOT EXISTS post (
        id INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '文章ID',
        title VARCHAR(100) NOT NULL COMMENT '文章标题',
        content LONGTEXT NOT NULL COMMENT '文章内容',
        pid INT UNSIGNED NULL COMMENT '文章分类',
        STATUS ENUM ('draft', 'published') NOT NULL DEFAULT 'draft' COMMENT '文章状态',
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
        updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
        is_deleted TINYINT (1) DEFAULT 0 COMMENT '软删除标记(0-未删除,1-已删除)',
        PRIMARY KEY (id),
        KEY idx_status (STATUS),
        KEY idx_created_at (created_at)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COMMENT = '文章表';

-- 创建分类表
CREATE TABLE
    IF NOT EXISTS category (
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, -- 自增主键
        title VARCHAR(100) NOT NULL UNIQUE, -- 分类名称，不能为空且唯一
        description TEXT -- 分类描述（可选）
    );

-- 添加外键约束
ALTER TABLE post ADD CONSTRAINT fk_category FOREIGN KEY (pid) REFERENCES category (id) ON DELETE SET NULL;

-- 当分类被删除时，将 pid 设置为 NULL