// Import du hook React pour gérer l’état local
import { useState } from 'react';

// Import des icônes d’activités
import valiseIcon from '/img/icon-work.svg';
import manetteIcon from '/img/icon-play.svg';
import livreIcon from '/img/icon-study.svg';
import activiteIcon from '/img/icon-exercise.svg';
import utilisateursIcon from '/img/icon-social.svg';
import coeurIcon from '/img/icon-self-care.svg';
import plusIcon from '/img/icon-ellipsis.svg';

// Import des styles CSS spécifiques au composant Card
import '../Cards/Card.css'; 

// Import de l'image de l'utilisateur
import avatarImg from '/img/image-jeremy.png';

// === Données utilisateur ===
const userData = {
    name: "Jeremy Robson",
    avatar: avatarImg
};

// === Données des activités avec temps par période ===
const activitiesData = [
    {
        name: "Travail",
        color: "#ff8c66",
        icon: "valise",
        timeframes: {
            daily: { current: 5, previous: 7 },
            weekly: { current: 32, previous: 36 },
            monthly: { current: 103, previous: 128 }
        }
    },
    {
        name: "Jeu",
        color: "#56c2e6",
        icon: "manette",
        timeframes: {
            daily: { current: 1, previous: 2 },
            weekly: { current: 10, previous: 8 },
            monthly: { current: 23, previous: 29 }
        }
    },
    {
        name: "Étude",
        color: "#ff5e7d",
        icon: "livre",
        timeframes: {
            daily: { current: 0, previous: 1 },
            weekly: { current: 4, previous: 7 },
            monthly: { current: 13, previous: 19 }
        }
    },
    {
        name: "Exercice",
        color: "#4bcf83",
        icon: "activité",
        timeframes: {
            daily: { current: 1, previous: 1 },
            weekly: { current: 4, previous: 5 },
            monthly: { current: 11, previous: 18 }
        }
    },
    {
        name: "Social",
        color: "#7335d2",
        icon: "utilisateurs",
        timeframes: {
            daily: { current: 1, previous: 3 },
            weekly: { current: 5, previous: 10 },
            monthly: { current: 21, previous: 23 }
        }
    },
    {
        name: "Soin de soi",
        color: "#f1c75b",
        icon: "coeur",
        timeframes: {
            daily: { current: 0, previous: 1 },
            weekly: { current: 2, previous: 2 },
            monthly: { current: 7, previous: 11 }
        }
    }
];

// === Composant principal Card ===
const Card = () => {
    // État local pour gérer la période sélectionnée (quotidien, hebdo, mensuel)
    const [timeframe, setTimeframe] = useState('weekly');

    // Fonction pour retourner l’icône correspondant à chaque activité
    const getIcon = (iconName) => {
        switch (iconName) {
            case 'valise': return <img src={valiseIcon} alt="valise" className="icon" />;
            case 'manette': return <img src={manetteIcon} alt="manette" className="icon" />;
            case 'livre': return <img src={livreIcon} alt="livre" className="icon" />;
            case 'activité': return <img src={activiteIcon} alt="activité" className="icon" />;
            case 'utilisateurs': return <img src={utilisateursIcon} alt="utilisateurs" className="icon" />;
            case 'coeur': return <img src={coeurIcon} alt="coeur" className="icon" />;
            default: return null;
        }
    };

    // Libellés des périodes précédentes
    const previousText = {
        daily: "Hier",
        weekly: "La semaine dernière",
        monthly: "Le mois dernier"
    };

    // === Rendu du composant ===
    return (
        <div className="dashboard-container">
            <div className="dashboard-grid">
                
                {/* Colonne de gauche : Profil utilisateur */}
                <div className="profile-column">
                    {/* Carte de profil */}
                    <div className="profile-card">
                        <div className="avatar-container">
                            <img src={userData.avatar} alt={userData.name} className="avatar-image" />
                        </div>
                        <div className="profile-info">
                            <p className="report-text">Rapport de</p>
                            <h1 className="profile-name">{userData.name}</h1>
                        </div>
                    </div>

                    {/* Boutons pour sélectionner la période d'affichage */}
                    <div className="time-selector-card">
                        <button 
                            className={`time-selector-button ${timeframe === 'daily' ? 'active' : ''}`}
                            onClick={() => setTimeframe('daily')}
                        >
                            Quotidien
                        </button>
                        <button 
                            className={`time-selector-button ${timeframe === 'weekly' ? 'active' : ''}`}
                            onClick={() => setTimeframe('weekly')}
                        >
                            Hebdomadaire
                        </button>
                        <button 
                            className={`time-selector-button ${timeframe === 'monthly' ? 'active' : ''}`}
                            onClick={() => setTimeframe('monthly')}
                        >
                            Mensuel
                        </button>
                    </div>
                </div>

                {/* Grille de droite : cartes d’activités */}
                <div className="activities-grid">
                    {activitiesData.map((activity) => (
                        <div key={activity.name} className="activity-card-container">
                            
                            {/* Bannière de l’activité avec icône */}
                            <div 
                                className="activity-banner"
                                style={{ backgroundColor: activity.color }}
                            >
                                <div className="activity-icon">
                                    {getIcon(activity.icon)}
                                </div>
                            </div>

                            {/* Corps de la carte activité */}
                            <div className="activity-card">
                                <div className="activity-header">
                                    <h3 className="activity-title">{activity.name}</h3>
                                    {/* Bouton options (3 points) */}
                                    <button className="more-button">
                                        <img src={plusIcon} alt="Plus d’options" className="more-icon" />
                                    </button>
                                </div>

                                {/* Affichage des heures */}
                                <div className="activity-data">
                                    <h2 className="activity-hours">
                                        {activity.timeframes[timeframe].current}hrs
                                    </h2>
                                    <p className="activity-previous">
                                        {previousText[timeframe]} - {activity.timeframes[timeframe].previous}hrs
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card;
