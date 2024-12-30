import * as winston from "winston";

const loggerInfo = winston.createLogger({
  level: "info",
  format: winston.format.json(),
    transports: [new winston.transports.File({ filename: "./log.txt" })],
});

loggerInfo.add(
  new winston.transports.Console({
    level: "info",
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple()
    ),
  })
);

const loggerWarning = winston.createLogger({
  level: "warn",
  format: winston.format.json(),
    transports: [new winston.transports.File({ filename: "./log.txt" })],
});

loggerWarning.add(
  new winston.transports.Console({
    level: "warn",
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple()
    ),
  })
);

const loggerError = winston.createLogger({
  level: "error",
  format: winston.format.json(),
    transports: [new winston.transports.File({ filename: "./log.txt" })],
});

loggerError.add(
  new winston.transports.Console({
    level: "error",
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple()
    ),
  })
);

const logger = {
  info: (msg: string) => {
    loggerInfo.info(msg);
  },
  warn: (msg: string) => {
    loggerWarning.warn(msg);
  },
  error: (msg: string) => {
    loggerError.error(msg);
  },
};

export default logger;
