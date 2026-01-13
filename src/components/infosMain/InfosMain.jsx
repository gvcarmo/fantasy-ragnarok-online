import './InfosMain.css'

const cardInfos = [
    { title: '📈 LOREM IPSUM', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, unde ut, nulla expedita soluta, illum velit omnis nesciunt ipsum aut asperiores? Assumenda inventore dolorum at ad. Cupiditate libero voluptates id?', itemList: './infos-list/item1.png'  },
    { title: '🔧 CONSECTETUR ADIPISICING', description: '', itemList: './infos-list/item4.png' },
    { title: '📋 DOLOR', description: '', itemList: './infos-list/item2.png' },
    { title: '⚖️ QUASI FACERE', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi facere laudantium laboriosam ea fuga.', itemList: './infos-list/item5.png' },
    { title: '💻 SIT AMET ', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, unde ut, nulla expedita soluta, illum velit omnis nesciunt ipsum aut asperiores? Assumenda inventore dolorum at ad. Cupiditate.', itemList: './infos-list/item3.png' },
    { title: '🎩 VELIT OMNIS', description: '', itemList: './infos-list/item6.png' },
]

export const InfosMain = () => {
    return (
        <div className="infos-main" id="infos">
            <img className="infos-title" src="./titles/infos.png" alt="Informações" />

            <div className="info-cards">
                {cardInfos.map((card, index) => (
                    <div key={index} className="info-card">
                        <h4>{card.title}</h4>
                        <p>{card.description}</p>
                        <img src={card.itemList} alt="Card infos" />
                    </div>
                ))}
            </div>
        </div>
    )
}