#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { PingS3L2Stack } from '../lib/ping-s3-l2-stack';
import { PingS3L2NewStack } from '../lib/ping-s3-l2-stack';

const app = new cdk.App();
new PingS3L2Stack(app, 'PingS3L2Stack', {
});
new PingS3L2NewStack(app, 'PingS3L2NewStack', {
});