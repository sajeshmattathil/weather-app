export default interface weatherData {
    name: string;
    main: {
      temp: number;
    };
    weather: weather[];
  }
  interface weather {
    description: string;
  }