import './Download.css'

export const Download = () => {
    return (
        <div className="download" id="downs">
            <div className="download-content">
                <img className="download-title" src="./titles/download.png" alt="Download" />
                <div className="download-here">
                    <a className="download-link" href="#"><img className="download-folder" src="./download-folder.png" alt="Download" /></a>
                    <p>Clique na imagem ao lado para baixar o jogo completo!</p>
                </div>
                <p>Para instalar, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, unde ut, nulla expedita soluta, illum velit omnis nesciunt.</p>
            </div>
            <img className="download-char" src="./download-char.png" alt="Download Character" />
        </div>
    )
}