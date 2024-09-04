function ProfilePicture(){
    const imgeUrl = './src/assets/zd.jpeg';

    const handleCLick = (e) => {
        //console.log("tes");
        e.target.style.display = "none";
    }

    return(<img src={imgeUrl} onClick={(e) => {handleCLick(e)}}></img>);
}

export default ProfilePicture