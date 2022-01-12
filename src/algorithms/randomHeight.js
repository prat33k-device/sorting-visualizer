function randomHeight() {
    const ran = Math.floor(Number(Math.random()*100)) + 1;
    return (ran < 3 ? 3 : ran);
}

export default randomHeight;