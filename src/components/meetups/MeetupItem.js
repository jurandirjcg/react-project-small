import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';

function MeetupItem(props) {
    const favoriteCxt = useContext(FavoritesContext);

    const itemIsFavorite = favoriteCxt.itemIsFavorite(props.id);

    function toggleFavoriteStatusHandler() {
        if(itemIsFavorite){
            favoriteCxt.removeFavorite(props.id);
        }else{
            favoriteCxt.addFavotire({
                id: props.id,
                title: props.title,
                image: props.image,
                address: props.address,
                description: props.description
            })
        }
    }

    return (
    <li className={classes.item}>
        <Card>
            <div className={classes.image}>
                <img src={props.image} alt={props.title} />
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.decription}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={toggleFavoriteStatusHandler}>
                    {itemIsFavorite ? 'Remove from Favorites': 'To Favorites'}
                </button>
            </div>
        </Card>
    </li>
    );
}

export default MeetupItem;