package org.appstore.core.service;

import org.apache.commons.logging.LogFactory;
import org.appstore.core.util.DeploymentTypes;

/**
 * Copyright (c) 2016, WSO2.Telco Inc. (http://www.wso2telco.com) All Rights Reserved.
 * <p>
 * WSO2.Telco Inc. licences this file to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * <p>
 * http://www.apache.org/licenses/LICENSE-2.0
 * <p>
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
public class ExtGtwRequestBuilder extends DefaultRequestBuilder {
    private static ExtGtwRequestBuilder instance;

    private ExtGtwRequestBuilder(DeploymentTypes depType) {
        log = LogFactory.getLog(ExtGtwRequestBuilder.class);
        super.depType = depType;
    }

    public static ExtGtwRequestBuilder getInstace(DeploymentTypes depType) {
        if (instance == null) {
            instance = new ExtGtwRequestBuilder(depType);
        }
        return instance;
    }
}
