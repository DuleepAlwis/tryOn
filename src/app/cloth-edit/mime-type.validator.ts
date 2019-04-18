import { AbstractControl } from "@angular/forms";
import { Observable, Observer } from "rxjs";
export const mimeType = (
  control: AbstractControl
): Promise<{ [key: string]: any }> | Observable<{ [key: string]: any }> => {
  const file = control.value as File;
  const fileReader = new FileReader();
  const frObs = Observable.create(
    (observer: Observer<{ [key: string]: any }>) => {
      fileReader.addEventListener("loadend", () => {
        const arr = new Uint8Array(fileReader.result).subarray(0, 4);
        let header = "";
        let isValid = false;
        let i = 0;
        for (i = 0; i < arr.length; i++) {
          header = header + arr[i].toString(16);
        }

        switch (header) {
          case "89504E47":
            isValid = true;
            break;
          case "FFd8FFE0":
            isValid = true;
            break;
          case "FFD8FFE1":
            isValid = true;
            break;
          case "FFD8FFE2":
            isValid = true;
            break;
          case "FFD8FFE3":
            isValid = true;
            break;
          case "FFD8FFE8":
            isValid = true;
            break;
          default:
            isValid = false;
            break;
        }
        if (isValid) {
          observer.next(null);
        } else {
          observer.next({ invalidMimeType: true });
        }
        observer.complete();
      });
      fileReader.readAsArrayBuffer(file);
    }
  );
  return frObs;
};
