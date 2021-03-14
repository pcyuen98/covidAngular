import { Injectable } from '@angular/core';

@Injectable()
export class GlobalMethods {

    public static getError(error: any) {

        if (error.status!= undefined) {
            let status = error.status ;
            if (status == '404')
            {
                return error.message;
            }
        else if (status == '500')
            {
                return error.error.message;
            }
            else if (status == '0')
            {
                return error.message;
            }    
        }
        
        else if (error.message != undefined)
        {
            return error.message;
        }
        else {
            return error;
        }
            
    }
 
}