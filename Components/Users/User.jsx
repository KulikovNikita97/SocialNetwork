import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Users.module.css';
import userPhoto from '../../media/lunaNoPhoto.png'


export const User = ({ user, followingInProgress, unfollow, follow }) => {
    return (
        <div className={s.users}>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small
                            != null
                            ? user.photos.small : userPhoto}
                            className={s.userPhoto}
                            alt="" />
                    </NavLink>
                </div>
            </span>
            <span>
                <div className={s.username}>
                    {user.name}
                </div>
                <div>
                    {user.status}
                </div>
                <div className={s.button}>
                    {user.followed
                        ? <button disabled={followingInProgress
                            .some(id => id === user.id)}
                            onClick={() => {
                                unfollow(user.id)
                            }}>
                            Unfollow
                        </button>

                        : <button disabled={followingInProgress
                            .some(id => id === user.id)}
                            onClick={() => {
                                follow(user.id)
                            }}>
                            Follow
                        </button>
                    }
                </div>
            </span>
        </div>
    )
}