//
//  ShoutStreamerIOS.m
//  voxfm
//
//  Created by Jesse Barron on 4/10/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(ShoutStreamerIOS, NSObject)
RCT_EXTERN_METHOD(play:(NSString *)url)
RCT_EXTERN_METHOD(pause)
RCT_EXTERN_METHOD(configInfoCenter:(NSString *)title station:(NSString *)station)
@end
