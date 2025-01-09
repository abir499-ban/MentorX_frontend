export function checkInvalidResponse(Response){
    if(Response.statusCode == 401 || Response.statusCode == 400 || Response.statusCode == 402 || Response.statusCode == 403){
        return true;
    }
    if(!Response.status || Response.status == undefined) return false
    if(Response.status == 401 || Response.status == 400 || Response.status == 402 || Response.status == 403){
        return true;
    }
    return false;
}