async function stall(stallTime = 500) {
    await new Promise(resolve => setTimeout(resolve, stallTime));
}

export default stall