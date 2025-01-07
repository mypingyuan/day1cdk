import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class PingS3L2Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);


     const pingl2s2 =  new s3.Bucket (this, 'pingl2s3',{
      bucketName : "pingl2bucket",
      removalPolicy : cdk.RemovalPolicy.DESTROY
     })
  }
}

export class PingS3L2NewStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);


     const pingl2s2 =  new s3.Bucket (this, 'pingl2news3',{
      bucketName : "pingl2newbucket",
      removalPolicy : cdk.RemovalPolicy.DESTROY
     })
  }
}

