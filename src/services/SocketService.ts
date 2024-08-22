import { io } from "socket.io-client"

export class SocketServices {
    private static instance: SocketServices;
    static socket = io("http://localhost:3001")


    // Méthode statique pour accéder à l'unique instance
    public static getInstance(): SocketServices {
        this.socket.on("joinedGame", () => {
            console.log("u joined a game");
        })


        if (!SocketServices.instance) {
            SocketServices.instance = new SocketServices();
        }
        return SocketServices.instance;
    }


    static sendMessage(msg: string) {
        this.socket.emit("message", msg)
    }

    static search() {
        this.socket.emit("search")
    }

    static printClient() {
        this.socket.emit("printClients")
    }
}

export default SocketServices.getInstance()