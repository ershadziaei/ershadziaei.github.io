d3.json("https://gbfs.citibikenyc.com/gbfs/en/station_information.json").then(
    function(responseData)
    {
        console.log(responseData);
    }
);