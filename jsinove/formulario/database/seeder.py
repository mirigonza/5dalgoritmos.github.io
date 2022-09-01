import sqlite3 as sql


DB_PATH = "C://Users//miria//OneDrive//Escritorio//jsinove//formulario//database//contactos.db"

def createDB():
    conn = sql.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("""CREATE TABLE contactos (
        [nombre] TEXT,
        [correo] TEXT,
        [telefono] INTEGER,
        [mensaje] TEXT
    );
    """ )
    conn.commit()
    conn.close()

def addValues():
    conn = sql.connect(DB_PATH)
    cursor = conn.cursor()
    data = [
        ("Mirian", "mirian@gmail.com", 1157190323, "Linda web"),
        ("Rafael", "rafael@gmail.com", 1148795623, "Quiero mas info")
    ]
    cursor.executemany("""INSERT INTO contactos VALUES (?, ?, ?, ?)""",data)
    conn.commit()
    conn.close()


if __name__=="main__":
    createDB()
    addValues()