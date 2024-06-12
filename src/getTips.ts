function getWeatherTips(weather : string) {
    switch (weather) {
        case "clear sky":
            return [
                "Farmers: Clear skies indicate good weather for planting or harvesting crops.",
                "Event planners: Consider outdoor events with plenty of sunshine.",
                "Delivery workers: Expect smooth and pleasant conditions for deliveries."
            ];
        case "few clouds":
            return [
                "Farmers: Few clouds may provide some relief from direct sunlight, but ensure crops are adequately watered.",
                "Event planners: Prepare for potential changes in weather.",
                "Delivery workers: Expect relatively normal conditions."
            ];
        case "scattered clouds":
        case "broken clouds":
            return [
                "Farmers: Scattered or broken clouds may lead to fluctuations in temperature and sunlight. Keep an eye on weather updates and protect crops accordingly.",
                "Event planners: Have contingency plans for outdoor events.",
                "Delivery workers: Prepare for potential changes in weather."
            ];
            case "overcast clouds":
                return [
                    "Farmers: Scattered or broken clouds may lead to fluctuations in temperature and sunlight. Keep an eye on weather updates and protect crops accordingly.",
                    "Event planners: Have contingency plans for outdoor events.",
                    "Delivery workers: Prepare for potential changes in weather."
                ];
        case "rain":
        case "heavy intensity rain":
            return [
                "Farmers: Rain can be beneficial for crops, but excessive rainfall may lead to flooding or waterlogging. Take precautions to prevent damage to crops.",
                "Event planners: Have indoor backup plans for outdoor events.",
                "Delivery workers: Expect delays and take precautions for wet conditions."
            ];
        case "thunderstorm":
            return [
                "Farmers: Thunderstorms can pose a risk to crops due to heavy rain, strong winds, and lightning. Secure outdoor equipment and take shelter if necessary.",
                "Event planners: Postpone outdoor events and prioritize safety.",
                "Delivery workers: Seek shelter and avoid being outdoors during the storm."
            ];
        case "snow":
            return [
                "Farmers: Snowfall may affect crops and livestock, particularly if it accumulates heavily. Take measures to protect crops, animals, and equipment from cold temperatures.",
                "Event planners: Reschedule or adjust plans due to snow.",
                "Delivery workers: Exercise caution while driving and expect delays."
            ];
        default:
            return [
                ''
            ];
    }
}

export default getWeatherTips
