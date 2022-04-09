import { IOffering } from "../../types/Offering"

const insuranceOfferings: IOffering[] = [
    {
        id: 1,
        title: "Proteco Insurance", 
        description:"Our most affordable package. Your personal belongings will be covered up to 15k$. This is perfect if you own a few belongings.",
        price: "12.50$",
        imgSrc: "https://www.landryconsulting.com/wp-content/uploads/nexuweb-protection-banner.jpg"
    },
    {
        id: 2,
        title: "Umbrella Insurance",
        description:"Our most popular package. Your personal belongings will be covered up to 30k$. This package also includes a free water sensor to detect a water leak in your home.",
        price: "35.73$",
        imgSrc: "https://c8.alamy.com/comp/M9J7PW/protection-banner-hand-hold-umbrella-over-home-insurance-services-concept-M9J7PW.jpg"
    },
    {
        id:3,
        title: "Thor insurance",
        description: "Nothing but the best. Your personal belongings will be covered up to 100k$. It even includes a protection against an alien invasion.",
        price: "79.30$",
        imgSrc: "https://pbs.twimg.com/media/DjcByY8WsAAVgPq?format=jpg&name=large"
    }
]

export {
    insuranceOfferings
}