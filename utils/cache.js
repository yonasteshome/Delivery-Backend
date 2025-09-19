const { client: redisClient } = require("../config/redis");

const checkCache = async (cacheKey) => {
  try {
    const cached = await redisClient.get(cacheKey);
    return cached ? JSON.parse(cacheKey) : null;
  } catch (err) {
    logger.error(`Error checking cache for key ${cacheKey}: ${err.message}`);
    return null;
  }
};

module.exports = { checkCache };
