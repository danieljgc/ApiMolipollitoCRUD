var db = require('./firestore')

function addPlate(pid, plate, callback){
    return db
    .collection('platos')
    .doc(pid)
    .set(plate)
    .then(function(refDoc){
        callback({response : "Plate created"})
    })
    .catch(function(err){
        callback({response: "Error creating the plate"})
    })
}


function getPlatesbyCategory(category, callback){
    var platesCategory = [];
    return db
    .collection('platos')
    .where('type', '==', category)
    .get()
    .then(function(refDoc){
        refDoc.forEach(function(doc){
            var obj = doc.data();
            obj.pid = doc.id;
            platesCategory.push(obj);
        })
        callback(platesCategory)
    })
    .catch(function(err){
        callback({response : "Error to get the plates."})
    })
}


function getPlatebyName(name, callback){
    var platesbyName = [];
    return db
    .collection('platos')
    .where('name', '==', name)
    .get()
    .then(function(refDoc){
        refDoc.forEach(function(doc){
            var obj = doc.data();
            obj.pid = doc.id;
            platesbyName.push(obj);
        })
        callback(platesbyName)
    })
    .catch(function(err){
        callback({response : "Error to get the plates."})
    })
}


function delePlate(pid, callback){
    return db
    .collection('platos')
    .doc(pid)
    .delete()
    .then(function(refDoc){
        callback({response : "Plate deleted."})
    })
    .catch(function(err){
        callback({response : "Error to delete a plate."})
    })
}


function updatePlate(pid, plate, callback){
    return db
    .collection('platos')
    .doc(pid)
    .update(plate)
    .then(function(refDoc){
        callback({response : "Plate saved"})
    })
    .catch(function(err){
        callback({response : "Error updating the plate"})
    })
}


function getPlatePlusIva(pid, callback){
    return db
    .collection('platos')
    .doc(pid)
    .get()
    .then(function(refDoc){
        if(refDoc.data() == undefined){
            callback({response : "This plate doesn't exists."})
        }else{
            var obj = refDoc.data();
            obj.precio = obj.precio + (obj.precio * 19 / 100);
            callback(obj)
        }
    })
    .catch(function(err){
        callback({response : "Error to get a plate."})
    })
}


module.exports = {
    addPlate,
    getPlatesbyCategory,
    getPlatebyName,
    delePlate,
    updatePlate,
    getPlatePlusIva

}