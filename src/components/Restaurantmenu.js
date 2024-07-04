import { useEffect, useState } from "react";
import Shimer from "./Shimer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams();
    // console.log(resId);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const menuData = await fetch(MENU_API + resId + "&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER");
        const jsonData = await menuData.json();
        console.log(jsonData);
        setResInfo(jsonData.data);
    }

    const resinfoData = resInfo && resInfo.cards && resInfo.cards[2]?.card?.card?.info;
    // console.log(resinfoData);
    const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards || [];


    return resInfo === null ? <Shimer /> : (
        <>
            <div className="menu-card">
                <h1>{resinfoData?.name}</h1>
                <p> {resinfoData?.cuisines} -
                    {resinfoData?.costForTwoMessage}</p>
                <ul>
                    {itemCards.map((item) => {
                        return <li key={item.card.info.id}>{item.card.info.name} - {item.card.info.price / 100}</li>
                    })}
                </ul>
            </div>
        </>
    );
};

export default RestaurantMenu;