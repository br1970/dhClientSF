#!/bin/bash

azure servicefabric application delete fabric:/dhclientapp
azure servicefabric application type unregister dhclientappType 1.0.0
