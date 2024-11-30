console.log('Start');

const user_id = 1;

function login(user_id) {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(user_id == 1){
                console.log('Correct Log');
                resolve({ id: 1 });
            }
            else{
               reject(new Error('Getting error'));
            }
            
        }, 1000);
    });
};


function PermissionToPass(id) {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(id != ""){
                resolve({pass: 'You Have to now permission'});
            }
            else{
                reject(new Error('Empty id'));
            }
        }, 1500);
    });    
}

async function Desplayinfor() {
    try {
        const user = await login(user_id);
        const IsPass = await PermissionToPass(user.id);
        console.log(IsPass);    
    } catch (error) {
        console.error('Error', error.message);
        
    }
}

Desplayinfor();

console.log('End');

