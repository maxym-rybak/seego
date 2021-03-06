import { Injectable } from '@nestjs/common';
import S3 from 'aws-sdk/clients/s3';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! : )';
  }

  uploadToS3(file: { originalname: string; buffer: Buffer }): void {
    const s3bucket = new S3({
      apiVersion: '2006-03-01',
      region: 'us-west-1',
      credentials: {
        accessKeyId: process.env.IAM_USER_KEY,
        secretAccessKey: process.env.IAM_USER_SECRET_KEY,
      },
    });
    s3bucket.createBucket(function() {
      const params = {
        Bucket: 'seego',
        Key: file.originalname,
        Body: file.buffer,
      };
      s3bucket.upload(params, function(err, data) {
        if (err) {
          console.log(err);
        }
        console.log(data);
      });
    });
  }
}
