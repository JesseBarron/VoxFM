//
//  VideoPlayerBridge.m
//  voxfm
//
//  Created by Jesse Barron on 3/13/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(VideoPlayerIOS, NSObject);

RCT_EXTERN_METHOD(play:(NSString *)url)

@end
