import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config(); // 加载 .env 和 .env.local 文件

interface DbConfig {
  host?: string; // host 可以是 undefined，因为 .env 文件可能未定义
  port?: number; // port 可以是 undefined，因为 .env 文件可能未定义
  user?: string;
  password?: string;
  database?: string;
}

const dbConfig: DbConfig = {
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT ? parseInt(process.env.MYSQL_PORT, 10) : undefined, // 确保端口是数字
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
};

let pool: mysql.Pool; // 使用连接池

async function getPool(): Promise<mysql.Pool> {
  if (!pool) {
    pool = mysql.createPool(dbConfig);
  }
  return pool;
}

export async function SQL<T>(sql: string, params?: any[]): Promise<T[]> {
  const connection = await (await getPool()).getConnection(); // 从连接池获取连接
  try {
    const [rows] = await connection.execute(sql, params);
    return rows as T[]; // 类型断言，确保返回类型正确
  } finally {
    connection.release(); // 释放连接回连接池
  }
}

export default getPool; // 导出连接池，如果需要直接使用
