export class TranFormUtil {

    toArray(data): any[] {
        if (data) {
          if (data instanceof Object && data instanceof Array) {
            return data;
          }
          return [data];
        }
        return [];
      }
}