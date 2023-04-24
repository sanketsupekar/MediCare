function isHospitalId(id)
{
    if(id.length > 3 && id.length < 3) return false;
    const letter = id.charAt(0);
    const digits = id.slice(1); 
    if(letter === "H" || letter == "h")
    {
        if(Number.isInteger(parseInt(digits)))
        {
            return true;
        }
    }
    return false;
}

module.exports = {isHospitalId};
