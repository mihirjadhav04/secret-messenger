import { Message } from "../model/User";


export interface ApiResonse{
    success: boolean;
    message: string;
    isAcceptingMessages?: boolean;
    messages?: Array<Message>;
}