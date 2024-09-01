//import styles from "./Button.module.css" MODULES

function Button(){

    const styles = {
            backgroundColor: "hsl(200, 100%, 50%)",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
    }
    return(
        //<button className={styles.button}>Click me</button> MODULES
        <button style={styles}>Click me</button> //INLINE
    );
}

export default Button