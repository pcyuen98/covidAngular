import { Injectable } from '@angular/core';

@Injectable()
export class GlobalMethods {

    public static getError(error: any) {
        if (error.status == '404')
        {
            return error.message;
        }
        else if (error.status == '500')
        {
            return error.error.message;
        }
        else {
            return 'No Error Message detected';
        }
            
    }
 }