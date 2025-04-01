const express=require('express');
const mysql=require('mysql')
const cors=require('cors')

const app=express()
app.use(cors())
app.use(express.json())
const db=mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'',
        database:'legal1'
    }
)

app.get("/mes",(req,res)=>{
    const sql='SELECT * FROM user_detail';
    db.query(sql,(err,data)=>{
        if(err)return res.json(err);
        return res.json(data);
    })
})
app.get("/u_info",(req,res)=>{
    const sql="SELECT * FROM user_login";
    db.query(sql,(err,data)=>{
        if(err)return res.json(err);
        return res.json(data);

    })
})
app.get("/j_info",(req,res)=>{
    const sql="SELECT * FROM judge_login";
    db.query(sql,(err,data)=>{
        if(err)return res.json(err);
        return res.json(data);

    })
})
app.get("/l_info",(req,res)=>{
    const sql="SELECT * FROM lawyer_login";
    db.query(sql,(err,data)=>{
        if(err)return res.json(err);
        return res.json(data);

    })
})

app.post("/sen", (req, res) => {
    const { name,lawyer,title, description } = req.body;  // ✅ Extract values correctly


    const sql = "INSERT INTO user_detail (user_name,lawyer,case_title,case_desc,status,next_hearing) VALUES (?, ?,?,?,'P','')";  // ✅ Use (?, ?)
    db.query(sql, [name,lawyer,title, description ], (err, result) => {   // ✅ Use correct format
        if (err) {
            console.error("Error inserting data:", err);
            return res.status(500).json({ error: err.message });
        }
        return res.status(201).json({ message: "Inserted successfully", result });
    });
});
app.post("/cur",(req,res)=>{
    const na=req.body;
    
    const sql = "UPDATE current SET user_name=? WHERE ID=1"
    db.query(sql, na, (err, result) => {   // ✅ Use correct format
        if (err) {
            console.error("Error inserting data:", err);
            return res.status(500).json({ error: err.message });
        }
        return res.status(201).json({ message: "Inserted successfully", result });
    });
})
app.get("/curr",(res,req)=>{
    
})
app.post("/senL", (req, res) => {
    const { ID, name, lawyer, title, description } = req.body;  // ✅ Use "ID"

    console.log("Received ID:", ID); // ✅ Debugging

    if (!ID) {
        return res.status(400).json({ error: "ID is required" });
    }

    const sql = "UPDATE user_detail SET lawyer_approved='Y' WHERE ID=?";
    db.query(sql, [ID], (err, result) => {
        if (err) {
            console.error("Error updating data:", err);
            return res.status(500).json({ error: err.message });
        }

        console.log("Affected Rows:", result.affectedRows); // ✅ Debugging

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "No record found with the given ID" });
        }

        return res.status(200).json({ message: "Updated successfully", result });
    });
});
app.post("/senJ", (req, res) => {
    const { ID,next_hearing,status } = req.body;  // ✅ Use "ID"

    console.log("Received ID:", ID); // ✅ Debugging

    if (!ID) {
        return res.status(400).json({ error: "ID is required" });
    }

    const sql = "UPDATE user_detail SET status=?,next_hearing=? WHERE ID=?";
    db.query(sql, [status,next_hearing,ID], (err, result) => {
        if (err) {
            console.error("Error updating data:", err);
            return res.status(500).json({ error: err.message });
        }

        console.log("Affected Rows:", result.affectedRows); // ✅ Debugging

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "No record found with the given ID" });
        }

        return res.status(200).json({ message: "Updated successfully", result });
    });
});


app.post("/senR", (req, res) => {
    const { ID, name, lawyer, title, description } = req.body;  // ✅ Use "ID"

    console.log("Received ID:", ID); // ✅ Debugging

    if (!ID) {
        return res.status(400).json({ error: "ID is required" });
    }

    const sql = "UPDATE user_detail SET lawyer_approved='R' WHERE ID=?";
    db.query(sql, [ID], (err, result) => {
        if (err) {
            console.error("Error updating data:", err);
            return res.status(500).json({ error: err.message });
        }

        console.log("Affected Rows:", result.affectedRows); // ✅ Debugging

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "No record found with the given ID" });
        }

        return res.status(200).json({ message: "Updated successfully", result });
    });
});

app.listen(8081,()=>{
    console.log("listening");
})