import { Socket } from "socket.io";
import { io } from "socket.io-client"

export class SocketServices {
    private static instance: SocketServices;
    static socket = io("http://localhost:3001")

    // Méthode statique pour accéder à l'unique instance
    public static getInstance(): SocketServices {
        if (!SocketServices.instance) {
            SocketServices.instance = new SocketServices();
        }
        return SocketServices.instance;
    }


    static sendMessage(msg: string) {
        this.socket.emit("message", msg)
    }

    static joinRoom(roomId: number) {
        this.socket.emit("join", roomId)
    }
}

export default SocketServices.getInstance()