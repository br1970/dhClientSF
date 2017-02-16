#!/bin/bash

azure servicefabric application delete fabric:/dreamhomesf
azure servicefabric application type unregister dreamhomesfType 1.0.0
