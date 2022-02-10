let agentName = document.querySelector('.agentName');
//let agentRole = document.querySelector('.agentRole');
let agentIcon = document.querySelector('.agentIcon');
let agentDescription = document.querySelector('.agentDescription');
// let agentAbilities = document.querySelector('.agentAbilities');
let agentBackground = document.querySelector('.backgroundImage');

async function getAgents() {
    let response = await fetch('https://valorant-api.com/v1/agents')
    return await response.json();
}

const agentSearch = document.querySelector('#fieldInput');

agentSearch.addEventListener('change', (event) => {
    searchForAgent(event.target.value);
});

function searchForAgent(agents) {
    getAgents().then(data => {
        const agentData = data['data'];
        // const agentDataAbilities = data['abilities'];
        const agentIndex = agentData.findIndex(item => item.displayName === agents);

        agentName.innerHTML = agentData[agentIndex].displayName;
        //agentRole.innerHTML = agentData[agentIndex].role;
        agentIcon.src = agentData[agentIndex].bustPortrait;
        agentDescription.innerHTML = agentData[agentIndex].description;
        // agentAbilities.innerHTML = agentData[agentIndex].abilities[agentData];
        agentBackground.background = agentData[agentIndex].background;

        console.log(agentData)
    })
}


// loader
// display errormessage if input is incorrect
// make possible to search toLowerCase
// loop through agent abilities
// on left side of page: display agents name (mousehover, mouseout)