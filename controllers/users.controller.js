const users = [];

export const getDetails = (req, res) => {

    return res.status(200).json({
        status: "success",
        result: users ?? "",
        err: ""
    })
}

export const authUser = (req, res) => {
    console.log(req.session);
    const { userName, password } = req.body;

    if (!userName || !password) {
        return res.status(400).json({
            status: "fail",
            result: "",
            err: "Bad Request Exception"
        })
    }

    const session = req.session;
    if (!session.users) {
        return res.status(401).json({
            status: "fail",
            result: "",
            err: "User is not Registered."
        })
    }

    return res.status(200).json({
        status: "success",
        result: "token stuff",
        err: ""
    })
}

export const createUser = async (req, res) => {
    const { userName, password } = req.body;

    if (!userName || !password) {
        return res.status(400).json({
            status: "fail",
            result: "",
            err: "Bad Request Exception"
        })
    }

    const session = req.session;
    if (session.users) {
        return res.status(403).json({
            status: "fail",
            result: "",
            err: "User is already Registered."
        })
    }

    users.push(req.body);
    req.session.users = req.body;
    await req.session.save();
    return res.status(201).json({
        status: "success",
        result: req.session.users,
        err: ""
    })
}