import styles from "./info.module.css";
const image_path = "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";


function Info(){
    return (
        <div className={styles.info}>
            <div className={styles.left}>
                <img src={image_path} alt="#codewithmushvig" />
            </div>
            <div className={styles.right}>
                <h1>I’m using <span>top leading design</span> methods in my work.</h1>
                <p>Sea was very don’t without I deep of Multiply Signs creature make a <span>fifth void</span> us face day.</p>
                <div>
                    <h4>Web-design - 70%</h4>
                    <div>
                        <span style={{width:"76%"}}></span>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Info