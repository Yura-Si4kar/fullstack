'use client';

import React, { useEffect, useState } from 'react';
import ClientsList from '@/components/Lists/ClientsList';
import AddClient from '@/components/Popup/AddClient';
import { selectClientsList } from '@/store/selectors/selectors';
import { setClientsList } from '@/store/slices/clientsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslations } from 'use-intl';

const list = [
    {
        _id: 1,
        name: "John Smith",
        email: "john@example.com",
        status: "Active",
        owner: "Client",
        activity: "2 hours ago"
    },
    {
        _id: 2,
        name: "Alice Moore",
        email: "alice@example.com",
        status: "Pending",
        owner: "Meneger",
        activity: "Yesterday"
    }
];

export default function ClientPage({ initialClients }) {
    const t = useTranslations('client');
    const dispatch = useDispatch();
    const clientsList = useSelector(selectClientsList);
    const [open, setOpen] = useState(false);

    useEffect(() => {
    if (clientsList.length === 0 && initialClients?.length) {
        dispatch(setClientsList(initialClients));
    }
    }, [dispatch, initialClients, clientsList.length]);

    console.log("initialClients:", initialClients);
    console.log("clientsList from Redux:", clientsList);

    return (
        <section className="clients">
            <header className="clients__header">
                <div className="clients__title">
                    <h1>{t('title')}</h1>
                    <p>{t('subtitle')}</p>
                </div>

                <div className="clients__actions">
                <input
                    type="text"
                    className="clients__search"
                    placeholder={t('search.placeholder')}
                />
                <button className="clients__btn clients__btn--primary" onClick={() => {setOpen(true)}}>
                    + {t('search.button')}
                </button>
                </div>
            </header>

            <div className="clients__table-wrapper">
                <table className="clients__table">
                    <thead>
                        <tr>
                            <th>{t('table.header.name')}</th>
                            <th>{t('table.header.email')}</th>
                            <th>{t('table.header.status')}</th>
                            <th>{t('table.header.owner')}</th>
                            <th>{t('table.header.activity')}</th>
                        <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        <ClientsList clients={clientsList} />
                    </tbody>
                </table>
            </div>
            <AddClient open={open} setOpen={setOpen} />  
        </section>
    )
}
