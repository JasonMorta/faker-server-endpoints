

exports.hardUsers = async (req, res) => {
    console.log('got the request')

    const users = [
        {
            "id": 0,
            "firstName": "Kim",
            "lastName": "Romaguera",
            "age": 29
        },
        {
            "id": 1,
            "firstName": "Emery",
            "lastName": "Kuhn",
            "age": 32
        },
        {
            "id": 2,
            "firstName": "Viola",
            "lastName": "Murray",
            "age": 95
        },
        {
            "id": 3,
            "firstName": "Cristopher",
            "lastName": "Nitzsche",
            "age": 28
        }
    ]
    try {

        res.status(200).send(users);

    } catch (error) {
        console.log('error', error)
        res.status(500).send({ message: error.message });
    }
};
