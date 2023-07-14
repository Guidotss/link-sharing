interface IConfig {
  Uri: string;
  options: {
    useNewUrlParser: boolean;
    useUnifiedTopology: boolean;
  };
}

const config: IConfig = {
  Uri: process.env.MONGO_URI || "",
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};

export default config;
